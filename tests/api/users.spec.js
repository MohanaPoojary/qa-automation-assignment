import { test, expect } from '@playwright/test';
import { userData } from '../../test-data/user.data';

test('should create, retrieve and update a user', async ({ request }) => {

  const usersEndpoint =
    `/api/collections/users/records?project_id=${process.env.REQRES_PROJECT_ID}`;

  const userEndpoint = (userId) =>
    `/api/collections/users/records/${userId}?project_id=${process.env.REQRES_PROJECT_ID}`;

  // 1. Create user
  const createResponse = await request.post(usersEndpoint, {
    data: {
      data: {
        name: userData.name,
        job: userData.job
      }
    }
  });

  expect(createResponse.status()).toBe(201);

  const createdUser = await createResponse.json();

  const userId = createdUser.data.id;

  expect(userId).toBeTruthy();

  // 2. Get created user
  const getResponse = await request.get(userEndpoint(userId));

  expect(getResponse.status()).toBe(200);

  const userDetails = await getResponse.json();

  expect(userDetails.data.id).toBe(userId);
  expect(userDetails.data.data.name).toBe(userData.name);
  expect(userDetails.data.data.job).toBe(userData.job);

  // 3. Update user's name
  const updateResponse = await request.put(userEndpoint(userId), {
    data: {
      data: {
        name: userData.updatedName,
        job: userData.job
      }
    }
  });

  expect(updateResponse.status()).toBe(200);

  const updatedUser = await updateResponse.json();

  expect(updatedUser.data.id).toBe(userId);
  expect(updatedUser.data.data.name).toBe(userData.updatedName);
  expect(updatedUser.data.data.job).toBe(userData.job);
});