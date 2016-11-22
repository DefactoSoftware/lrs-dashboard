import { mutableJoinByKey, modifyUniqueByAttribute } from './Array';

describe('mutableJoinByKey', ()=> {
  test('it should mutate the first argument', function () {
    const mutableArray = [];
    const arrayToJoin = [{ id: 0 }, { id: 1 }];

    mutableJoinByKey('id', mutableArray, arrayToJoin);

    expect(mutableArray).toEqual([{ id: 0 }, { id: 1 }]);
  });

  test('it should join by key', ()=> {
    const mutableArray = [{ id: 0 }, { id: 1 }];
    const arrayToJoin = [{ id: 1 }, { id: 2 }];

    mutableJoinByKey('id', mutableArray, arrayToJoin);

    expect(mutableArray).toEqual([{ id: 0 }, { id: 1 }, { id: 2 }]);
  });

  test('it should allow a different keys', ()=> {
    const mutableArray = [{ id: 0, key: 0 }, { id: 1, key: 1 }];
    const idArray = [{ id: 1 }, { id: 2 }];
    const keyArray = [{ key: 1 }, { key: 2 }];

    mutableJoinByKey('id', mutableArray, idArray);
    mutableJoinByKey('key', mutableArray, keyArray);

    expect(mutableArray).toEqual([
      { id: 0, key: 0 },
      { id: 1, key: 1 },
      { id: 2 },
      { key: 2 }
    ]);
  });
});

describe('modifyUniqueByAttribute', ()=> {
  const arrayWithDuplicates = [
    { id: 0, value: 0 },
    { id: 0, value: 1 },
    { id: 0, value: 2 }
  ];

  expect(
    modifyUniqueByAttribute(
      'id',
      'value',
      v => v + 1,
      arrayWithDuplicates,
    )
  ).toEqual(
    [{ id: 0, value: 3 }]
  );
});
