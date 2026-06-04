import { Controller, Post, Get, Put, Delete, Body, UseGuards, Req, Param, ParseIntPipe, Query, NotFoundException } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiQuery, ApiBody, ApiProperty, ApiOperation } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { PrismaService } from '../prisma/prisma.service';

class CreateListingDto {
  @ApiProperty({ example: 'Turbo Murahan' })
  name: string;
  @ApiProperty({ example: 4500 })
  price: number;
}

@ApiTags('Project Forum & Marketplace System')
@Controller('projects')
export class ProjectsController {
  constructor(
    private projectsService: ProjectsService,
    private prisma: PrismaService,
  ) { }

  // 🏪 MARKETPLACE LISTING CREATION (Both roles can list/sell parts if needed)
  @Post('market/listings')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods', 'customer')
  @ApiBearerAuth()
  @ApiBody({ type: CreateListingDto })
  async createListing(@Body() body: any) {
    const payload = body?.body ? body.body : body;
    return this.projectsService.createPartListing(payload);
  }
  
  // 👁️ PUBLIC USER PROFILE WITH RELATED BUILD PROJECTS
  @Get('user/:username')
  async getProjectsByUsername(@Param('username') username: string) {
    const userWithProjects = await this.prisma.user.findUnique({
      where: { username },
      select: { fullname: true, username: true, avatarUrl: true, projects: true }
    });
    if (!userWithProjects) throw new NotFoundException(`The user handle "${username}" does not exist`);
    return userWithProjects;
  }

  // 👁️ VIEW MARKETPLACE LISTINGS (Public Access)
  @Get('market/listings')
  async getListings() {
    return this.projectsService.getMarketplaceListings();
  }

  // 🛍️ MARKETPLACE PURCHASE (Customers buying parts/mods for their builds)
  @Post('market/purchase/:listingId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('customer', 'mods')
  @ApiBearerAuth()
  async buyItem(@Req() req: any, @Param('listingId', ParseIntPipe) listingId: number) {
    return this.projectsService.purchaseMarketplaceItem(req.user.userId, listingId);
  }

  // 🛠️ GARAGE PROJECT CREATION (Only mods/mechanics can initiate garage build logs)
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async createProject(@Req() req: any, @Body() body: CreateProjectDto) {
    return this.projectsService.createProject(req.user.userId, body);
  }

  // 👁️ PUBLIC FORUM FEED (Both mods and customers can track ongoing builds)
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods', 'customer')
  @ApiBearerAuth()
  @ApiQuery({ name: 'userId', required: false })
  async getForumFeed(@Query('userId') userId?: number) {
    return this.projectsService.getAllProjects(userId);
  }

  // 📝 UPDATE PROJECT CORE DETAILS (Owner-restricted logic inside service layer)
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async updateProj(@Req() req: any, @Param('id', ParseIntPipe) id: number, @Body() body: CreateProjectDto) {
    return this.projectsService.updateProject(id, req.user.userId, body);
  }

  // ❌ DELETE PROJECT (Owner-restricted logic inside service layer)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async deleteProj(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.projectsService.deleteProject(id, req.user.userId);
  }

  // ⏱️ VIEW PROJECT TIMELINE (Both can view the chronological modification log timeline)
  @Get(':id/timeline')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods', 'customer')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get chronological modification timeline data for a project' })
  async getProjectTimeline(@Param('id') id: string) {
    return this.projectsService.getProjectTimeline(Number(id));
  }

  // 🔧 LOG COMPONENT UPDATE ON TIMELINE (Only mods/mechanics performing the labor can push logs)
  @Post(':id/timeline')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async addTimeline(@Req() req: any, @Param('id', ParseIntPipe) id: number, @Body() body: CreateTimelineDto) {
    return this.projectsService.addTimelineLog(req.user.userId, id, body);
  }

  // 📝 UPDATE TIMELINE MOD LOG
  @Put('timeline/:logId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async updateTimeline(@Req() req: any, @Param('logId', ParseIntPipe) logId: number, @Body() body: CreateTimelineDto) {
    return this.projectsService.updateTimelineLog(req.user.userId, logId, body);
  }

  // ❌ DELETE TIMELINE MOD LOG
  @Delete('timeline/:logId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods')
  @ApiBearerAuth()
  async deleteTimeline(@Req() req: any, @Param('logId', ParseIntPipe) logId: number) {
    return this.projectsService.deleteTimelineLog(req.user.userId, logId);
  }

  // 📊 AUTHENTICATED USER DASHBOARD METRICS
  @Get('dashboard/metrics')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('mods', 'customer')
  @ApiBearerAuth()
  async getMetrics(@Req() req: any) {
    return this.projectsService.getUserDashboardMetrics(req.user.userId);
  }

  // 👁️ LIVE PUBLIC FEED OF RECENT SYSTEM ACTIONS
  @Get('dashboard/activity-feed')
  async getActivityFeed() {
    return this.projectsService.getRecentActivityFeed();
  }
}