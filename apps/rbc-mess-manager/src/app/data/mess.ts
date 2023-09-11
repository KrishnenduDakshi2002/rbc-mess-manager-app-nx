import { faker } from '@faker-js/faker';

function generateMessInputCardDetails(roomId: number): {
  id: string;
  roomId: number;
  user: string;
  date: Date;
  shift: 'MORNING' | 'EVENING';
} {
  const dateTime = faker.date.between({
    from: '2023-01-01T00:00:00.000Z',
    to: '2023-09-01T00:00:00.000Z',
  });
  const d = new Date(dateTime);
  let shift: 'MORNING' | 'EVENING' = 'MORNING';
  const t1a = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
  const t1b = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 59, 59);
  const t2a = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0, 0);
  const t2b = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
  if (d >= t1a && d <= t1b) {
    shift = 'MORNING';
  } else if (d >= t2a && d <= t2b) {
    shift = 'EVENING';
  }
  return {
    id: faker.string.uuid(),
    roomId: 100 + roomId,
    user: faker.person.fullName({ sex: 'male' }),
    date: dateTime,
    shift: shift,
  };
}

function generateMessInputData() {
  return Array.from({ length: 3 }, (_, i) => generateMessInputCardDetails(i));
}

export { generateMessInputData };
