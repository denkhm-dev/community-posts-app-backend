# Community Post Flagging Feature

## 1. What did you build in the time allowed?

I built a community post flagging feature with both frontend and backend components:

**Mobile App (React Native):**

- A community posts screen displaying a list of mocked posts
- Each post has a "Flag" button that opens a dialog with flagging reasons (Spam, Inappropriate, Harassment, False Information)
- Visual feedback showing loading states during flagging
- Once a post is successfully flagged, the button becomes disabled and shows "Flagged" status
- Dark mode support

**Backend (Express + TypeScript):**

- RESTful API endpoint (`POST /api/flags`) to handle flag submissions
- Duplicate prevention logic that prevents the same user from flagging the same post twice
- In-memory data store for flags (can be replaced with a database in production)

## 2. What would you build next with more time?

1. **Authentication**: Replace device-based user IDs with proper authentication
2. **Database**: Replace in-memory storage with Firebase
3. **Admin Dashboard**: Create an interface for moderators to review flagged posts and take action
4. **Auto-moderation**: Implement logic to automatically hide posts that receive a certain number of flags
5. **Real Post Data**: Connect to a database for actual community posts instead of mocked data
6. **Post Details Screen**: Add navigation to view full post details before flagging

## 3. How would this feature connect to the rest of a real app?

- **Post Management**: Posts would come from a database, populated by users through a "Create Post" screen
- **User Authentication**: Firebase would provide real user IDs instead of device-based IDs
- **Post Feed**: The community screen would be part of a larger feed with pagination, pull-to-refresh, and real-time updates

## 4. What potential issues do you see with scaling or users?

1. **Server Overload**: Too many simultaneous flag requests could slow down the server. Need rate limiting.

2. **Network Failures**: Users with poor internet might not be able to flag posts. Need retry logic and error handling.

3. **Abuse**: Malicious users could spam flags. Need rate limiting and monitoring.

## 5. How would you monitor or track errors in production?

1. **Error Tracking Services**: Use Sentry to automatically catch and log all crashes and errors.

2. **Health Monitoring**: Check if the server is running and set up alerts if it goes down.

3. **Server Logs**: Keep logs of all API requests to see what's failing and why.
