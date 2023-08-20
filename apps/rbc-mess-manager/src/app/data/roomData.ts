import { faker } from '@faker-js/faker';

function generateRoomData(id: number) {
  return {
    id: faker.string.uuid(),
    roomId: 100 + id,
    members: Array.from({ length: 4 }, generateRoomMember),
  };
}
function generateRoomMember() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName({ sex: 'male' }),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}

export const roomData = Array.from({ length: 10 }, (_, i) =>
  generateRoomData(i)
);

export const getRoomData = (id: number) => {
  return roomData.find((room) => room.roomId === id);
};
