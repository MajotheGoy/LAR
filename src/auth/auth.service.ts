import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { Roles } from './roles.decorator';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  
  async addFunds(userId: number, amount: number) {
    // 1. Fetch user profile
    const cleanUserId = Number(userId);
    
    const user = await this.prisma.user.findUnique({ where: { id: cleanUserId } });
    // 2. Safe verification handling
    if (!user) {
      throw new BadRequestException('Driver account profile not found');
    }

    // 3. Bypass stale Prisma caches with key-string accessors
    const currentBalance = Number((user as any).wallet || 0);
    const depositAmount = Number(amount);
    
    const updatedUser = await this.prisma.user.update({
      where: { id: cleanUserId },
      data: { 
        ['wallet' as any]: currentBalance + depositAmount 
      } as any,
    });

    return {
      message: 'Funds deposited successfully',
      currentWalletBalance: (updatedUser as any).wallet,
    };
  }

  async register(body: any) {
    const { email, password, username, fullname } = body;

    if (!email || !password || !username || !fullname) {
      throw new BadRequestException('bro check yo shi');
    }

    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('sum1 already used ts bro🥀');
    }
    const existingUsername = await this.prisma.user.findUnique({ where: { username, } });
    if (existingUsername) {
      throw new BadRequestException('sum1 already used ts bro🥀');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        email,
        username,
        fullname,
        password: hashedPassword,
        role: 'customer', // Default role on signup
      },
    });

    return {
      message: 'Registration successful',
      userId: newUser.id,
      role: (newUser as any).role || 'customer'
    };
  }

  async login(body: any) {
    const { email, password } = body;

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { 
      userId: user.id, 
      email: user.email,
      role: (user as any).role || 'customer' 
    };
    
    const secretKey = this.configService.get<string>('JWT_SECRET') || 'SUPER_SECRET_LOCAL_FALLBACK_123';
    const token = this.jwtService.sign(payload, { secret: secretKey });

    // 🌟 THE FIX FOR FE/FS: Explicitly exposing the role property in the JSON body response
    return {
      message: 'Login successful',
      token,
      role: payload.role // 👈 This gives them the exact string to hide/show UI buttons
    };
  }
}