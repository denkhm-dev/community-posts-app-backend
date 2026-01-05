import { Flag, FlagRequest, FlagResponse } from "../types";

const flagsStore: Map<string, Flag> = new Map();

function generateFlagId(postId: string, userId: string): string {
  return `${postId}_${userId}`;
}

export function hasUserFlaggedPost(postId: string, userId: string): boolean {
  const flagId = generateFlagId(postId, userId);
  return flagsStore.has(flagId);
}

export function flagPost(request: FlagRequest): FlagResponse {
  const { postId, userId, reason } = request;

  if (!postId || !userId || !reason) {
    return {
      success: false,
      message:
        "Missing required fields: postId, userId, and reason are required.",
    };
  }

  if (hasUserFlaggedPost(postId, userId)) {
    return {
      success: false,
      message: "You have already flagged this post.",
    };
  }

  const flagId = generateFlagId(postId, userId);
  const flag: Flag = {
    id: flagId,
    postId,
    userId,
    reason,
    timestamp: new Date(),
  };

  flagsStore.set(flagId, flag);

  return {
    success: true,
    message: "Post flagged successfully.",
    flagId,
  };
}

export function getPostFlags(postId: string): Flag[] {
  return Array.from(flagsStore.values()).filter(
    (flag) => flag.postId === postId
  );
}
