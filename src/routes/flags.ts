import express, { Request, Response } from "express";
import { flagPost } from "../services/flagService";
import { FlagRequest } from "../types";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  try {
    const { postId, reason, userId } = req.body;

    if (!postId || !reason || !userId) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: postId, reason, and userId are required.",
      });
    }

    const validReasons = [
      "Spam",
      "Inappropriate",
      "Harassment",
      "False Information",
    ];
    if (!validReasons.includes(reason)) {
      return res.status(400).json({
        success: false,
        message: `Invalid reason. Must be one of: ${validReasons.join(", ")}`,
      });
    }

    const flagRequest: FlagRequest = {
      postId,
      reason,
      userId,
    };

    const result = flagPost(flagRequest);

    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(409).json(result);
    }
  } catch (error) {
    console.error("Error flagging post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});

export default router;
