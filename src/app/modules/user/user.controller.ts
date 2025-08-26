import catchAsync from "../../shared/catchasync";
import { userService } from "./user.service";

const createStudent = catchAsync(async (req, res) => {
  const result = await userService.createStudent(req.body);
  res.send(result);
});

export const userController = { createStudent };
