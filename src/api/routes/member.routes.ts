import { Router } from 'express';
import MemberController from '../controllers/member.controller';
import AuthMiddleware from '../middlewares/auth.middleware';
import MemberMiddleware from '../middlewares/member.middleware';

const router = Router();

router.patch('/:clubId/members/:memberId', AuthMiddleware.verifyTokenWithMember, MemberMiddleware.validateMemberUpdate, MemberController.updateMember);

export default router;