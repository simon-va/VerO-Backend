import { Request, Response } from 'express';
import { CreateClubBody } from '../../types/club';
import ClubService from '../services/club.service';
import User from '../../db/models/user.model';
import MemberService from '../services/member.service';

class ClubController {
    static async createClub(req: Request, res: Response) {
        try {
            const user: User = res.locals.user;

            const body: CreateClubBody = req.body;

            const club = await ClubService.createClub(body);

            const member = await MemberService.createMember({
                userId: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                clubId: club.id,
                isAdmin: true,
                ...body
            });

            res.status(201).json({ club, member });
        } catch (error) {
            res.status(500).json({ errorMessage: 'Internal server error' });
        }
    }
}

export default ClubController;