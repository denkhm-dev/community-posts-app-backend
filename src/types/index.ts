export type FlagReason =
  | "Spam"
  | "Inappropriate"
  | "Harassment"
  | "False Information";

export interface Flag {
  id: string;
  postId: string;
  userId: string;
  reason: FlagReason;
  timestamp: Date;
}

export interface FlagRequest {
  postId: string;
  reason: FlagReason;
  userId: string;
}

export interface FlagResponse {
  success: boolean;
  message: string;
  flagId?: string;
}
