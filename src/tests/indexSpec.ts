import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import resize from '../modules/resize';
const req = supertest(app);

describe('Project test', () => {
  it('Get the endpoint of resize and returns 204 for bad params', async () => {
    const res = await req.get('/resize');
    expect(res.status).toBe(204);
  });

  it('resizing and saving', async () => {
    await resize(200, 300, 'fjord.jpg', 'fjordWidth200Height300.jpg');
    expect(
      fs.existsSync(`./images/editedImages/fjordWidth200Height300.jpg`)
    ).toBeTrue();
  });
});
