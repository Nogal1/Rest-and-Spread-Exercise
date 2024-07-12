describe("extend", function () {
    it("should combine two arrays into one", function () {
        var array1 = [1, 2, 3];
        var array2 = [4, 5, 6];
        expect(extend(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should not modify the original arrays", function () {
        var array1 = [1, 2, 3];
        var array2 = [4, 5, 6];
        extend(array1, array2);
        expect(array1).toEqual([1, 2, 3]);
        expect(array2).toEqual([4, 5, 6]);
    });
});

describe("addKeyVal", function () {
    it("should add a new key-value pair to an object", function () {
        const originalObject = { name: 'Alice' };
        const result = addKeyVal(originalObject, 'age', 30);
        expect(result).toEqual({ name: 'Alice', age: 30 });
    });

    it("should not modify the original object", function () {
        const originalObject = { name: 'Alice' };
        addKeyVal(originalObject, 'age', 30);
        expect(originalObject).toEqual({ name: 'Alice' });  // Original object remains unchanged
    });
});

describe("removeKey", function () {
    it("should remove an existing key from the object", function () {
        const originalObject = { name: 'Alice', age: 25 };
        const result = removeKey(originalObject, 'age');
        expect(result).toEqual({ name: 'Alice' });
        expect(result.age).toBeUndefined();
    });

    it("should not modify the original object", function () {
        const originalObject = { name: 'Alice', age: 25 };
        removeKey(originalObject, 'age');
        expect(originalObject).toEqual({ name: 'Alice', age: 25 });
    });

    it("should handle non-existing keys", function () {
        const originalObject = { name: 'Alice', age: 25 };
        const result = removeKey(originalObject, 'height');
        expect(result).toEqual({ name: 'Alice', age: 25 });
    });

    it("should work with objects that have multiple keys", function () {
        const originalObject = { name: 'Alice', age: 25, gender: 'Female' };
        const result = removeKey(originalObject, 'gender');
        expect(result).toEqual({ name: 'Alice', age: 25 });
    });
});

describe("combine", function () {
    it("should combine two objects into one", function () {
        const obj1 = { name: 'Alice', age: 25 };
        const obj2 = { city: 'Wonderland', age: 30 };
        const result = combine(obj1, obj2);
        expect(result).toEqual({ name: 'Alice', age: 30, city: 'Wonderland' });
    });

    it("should handle an empty first object", function () {
        const obj1 = {};
        const obj2 = { name: 'Bob', age: 24 };
        const result = combine(obj1, obj2);
        expect(result).toEqual({ name: 'Bob', age: 24 });
    });

    it("should handle an empty second object", function () {
        const obj1 = { name: 'Carol', age: 29 };
        const obj2 = {};
        const result = combine(obj1, obj2);
        expect(result).toEqual({ name: 'Carol', age: 29 });
    });

    it("should return an empty object if both objects are empty", function () {
        const obj1 = {};
        const obj2 = {};
        const result = combine(obj1, obj2);
        expect(result).toEqual({});
    });

    it("should not modify the original objects", function () {
        const obj1 = { name: 'Dave' };
        const obj2 = { age: 34 };
        combine(obj1, obj2);
        expect(obj1).toEqual({ name: 'Dave' });
        expect(obj2).toEqual({ age: 34 });
    });
});

describe("update", function () {
    it("should update an existing key with a new value", function () {
        const obj = { name: 'Alice', age: 25 };
        const key = 'age';
        const val = 30;
        const result = update(obj, key, val);
        expect(result).toEqual({ name: 'Alice', age: 30 });
    });

    it("should add a new key-value pair if the key does not exist", function () {
        const obj = { name: 'Bob' };
        const key = 'age';
        const val = 24;
        const result = update(obj, key, val);
        expect(result).toEqual({ name: 'Bob', age: 24 });
    });

    it("should handle updating to a null value", function () {
        const obj = { name: 'Carol', age: 29 };
        const key = 'age';
        const val = null;
        const result = update(obj, key, val);
        expect(result).toEqual({ name: 'Carol', age: null });
    });

    it("should not modify the original object", function () {
        const obj = { name: 'Dave', age: 34 };
        const key = 'age';
        const val = 35;
        update(obj, key, val);
        expect(obj).toEqual({ name: 'Dave', age: 34 });
    });

    it("should handle an empty object and add a new key-value pair", function () {
        const obj = {};
        const key = 'name';
        const val = 'Eve';
        const result = update(obj, key, val);
        expect(result).toEqual({ name: 'Eve' });
    });

    it("should be able to handle multiple updates", function () {
        const obj = { name: 'Frank' };
        const firstUpdate = update(obj, 'age', 28);
        const secondUpdate = update(firstUpdate, 'city', 'Townsville');
        expect(secondUpdate).toEqual({ name: 'Frank', age: 28, city: 'Townsville' });
    });
});
