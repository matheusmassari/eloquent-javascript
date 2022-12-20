const flatList = [
    {
        id: 1,
        name: "lvl 1 item 1",
        parentId: null,
    },
    {
        id: 2,
        name: "lvl 1 item 2",
        parentId: null,
    },
    {
        id: 3,
        name: "lvl 2 item 3",
        parentId: 1,
    },
    {
        id: 4,
        name: "lvl 3 item 4",
        parentId: 3,
    },
    {
        id: 5,
        name: "lvl 2 item 5",
        parentId: 2,
    },
];

const nestedList = () => {
    const nestedList = [];
    const flatListCopy = [...flatList];
    const rootItems = flatListCopy.filter((item) => item.parentId === null);
    rootItems.forEach((rootItem) => {
        const children = flatListCopy.filter(
            (item) => item.parentId === rootItem.id
        );
        if (children.length) {
            rootItem.children = children;
        }
        nestedList.push(rootItem);
    });
    return nestedList;
};

console.log(nestedList());
