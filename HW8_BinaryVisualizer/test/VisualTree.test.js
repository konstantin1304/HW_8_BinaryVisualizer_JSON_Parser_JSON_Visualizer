describe('BSTree Entry', () => {
    const testData = [{
        expected: `value`
    }, {
        expected: `left`
    }, {
        expected: `right`
    }, {
        expected: `parent`
    }, {
        expected: `toString`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let entry = new Entry();
        it(`should return True, when BSTree Entry has ${expected} prop/method`, function () {
            const actual = expected in entry;
            assert.deepEqual(actual, true);
        });
    });
});

describe('Binary search tree constructor', () => {
    const testData = [{
        expected: `root`
    }, {
        expected: `empty`
    }, {
        expected: `toArray`
    }, {
        expected: `toString`
    }, {
        expected: `insert`
    }, {
        expected: `remove`
    }, {
        expected: `find`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let bSTree = new BinaryTree();
        it(`should return True, when Binary search tree has ${expected} prop/method`, function () {
            const actual = expected in bSTree;
            assert.deepEqual(actual, true);
        });
    });
});

describe('Binary search tree methods', () => {
    describe('Binary search tree -> Empty method', () => {
        it('should be null of mockTree', () => {

            let mockTree = new BinaryTree();
            mockTree.insert(8);
            mockTree.insert(10);
            mockTree.insert(14);
            mockTree.insert(13);
            mockTree.insert(3);
            mockTree.insert(6);
            mockTree.insert(4);
            mockTree.insert(7);
            mockTree.insert(1);
            mockTree.insert(5);
            mockTree.empty();
            assert.deepEqual(mockTree, new BinaryTree());
        });

        it('shoud be root == null of mockTree', () => {

            let mockTree = new BinaryTree();
            mockTree.insert(8);
            mockTree.insert(10);
            mockTree.insert(14);
            mockTree.insert(13);
            mockTree.insert(3);
            mockTree.insert(6);
            mockTree.insert(4);
            mockTree.insert(7);
            mockTree.insert(1);
            mockTree.insert(5);
            mockTree.empty();
            assert.deepEqual(mockTree.root, null);
        });
    });

    describe('Binary search tree -> ToArray method', () => {
        it('shoud return new sorted array of mockTree --> ["A", "C", undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]', () => {

            let mockTree = new BinaryTree();
            mockTree.insert(8);
            mockTree.insert(10);
            mockTree.insert(14);
            mockTree.insert(13);
            mockTree.insert(3);
            mockTree.insert(6);
            mockTree.insert(null);
            mockTree.insert(4);
            mockTree.insert(7);
            mockTree.insert(undefined);
            mockTree.insert(1);
            mockTree.insert(5);
            mockTree.insert("A");
            mockTree.insert("C");

            let mockArr = ["A", "C", undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14];
            const actual = mockTree.toArray();
            assert.deepEqual(actual, mockArr);
        });
    });

    describe('Binary search tree -> ToString method', () => {
        it('shoud return new string (sorted) of mockTree --> A, C, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14', () => {

            let mockTree = new BinaryTree();
            mockTree.insert(8);
            mockTree.insert(10);
            mockTree.insert(14);
            mockTree.insert(13);
            mockTree.insert(3);
            mockTree.insert(6);
            mockTree.insert(null);
            mockTree.insert(4);
            mockTree.insert(7);
            mockTree.insert(undefined);
            mockTree.insert(1);
            mockTree.insert(5);
            mockTree.insert("A");
            mockTree.insert("C");

            let mockStr = 'A, C, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14';
            const actual = mockTree.toString();
            assert.deepEqual(actual, mockStr);
        });
    });

    describe('Binary search tree -> Insert method', () => {
        const testData = [{
            value: 8,
            expected: [8]
        }, {
            value: 10,
            expected: [8, 10]
        }, {
            value: 14,
            expected: [8, 10, 14]
        }, {
            value: 13,
            expected: [8, 10, 13, 14]
        }, {
            value: 3,
            expected: [3, 8, 10, 13, 14]
        }, {
            value: 6,
            expected: [3, 6, 8, 10, 13, 14]
        }, {
            value: null,
            expected: [null, 3, 6, 8, 10, 13, 14]
        }, {
            value: 4,
            expected: [null, 3, 4, 6, 8, 10, 13, 14]
        }, {
            value: 7,
            expected: [null, 3, 4, 6, 7, 8, 10, 13, 14]
        }, {
            value: undefined,
            expected: [undefined, null, 3, 4, 6, 7, 8, 10, 13, 14]
        }, {
            value: 1,
            expected: [undefined, null, 1, 3, 4, 6, 7, 8, 10, 13, 14]
        }, {
            value: 5,
            expected: [undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        }, {
            value: 'A',
            expected: ['A', undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        }, {
            value: 'C',
            expected: ['A', 'C', undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        }, {
            value: {
                name: 'Oleg',
                age: 45
            },
            expected: ['A', 'C', {
                name: 'Oleg',
                age: 45
            }, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        }, ];

        let mockTree = new BinaryTree();
        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud insert element = ${value} in Binary Search Tree`, () => {
                let outStr = [];
                mockTree.insert(value);
                outStr = mockTree.toArray();
                assert.deepEqual(outStr, expected);
            });
        });
    });

    describe('Binary search tree -> Find method', () => {
        let mockTree = new BinaryTree();
        
        mockTree.insert(8);
        mockTree.insert(10);
        mockTree.insert(14);
        mockTree.insert(13);
        mockTree.insert(3);
        mockTree.insert(6);
        mockTree.insert(null);
        mockTree.insert(4);
        mockTree.insert(7);
        mockTree.insert(undefined);
        mockTree.insert(1);
        mockTree.insert(5);
        mockTree.insert("A");
        mockTree.insert("C");
        mockTree.insert({
            name: 'Oleg',
            age: 45
        });

        const testData = [{
            value: 8,
            expected: new Entry(8, null)
        }, {
            value: 10,
            expected: new Entry(10)
        }, {
            value: 14,
            expected:  new Entry(14)
        }, {
            value: 13,
            expected:  new Entry(13)
        }, {
            value: 3,
            expected:  new Entry(3)
        }, {
            value: 6,
            expected:  new Entry(6)
        }, {
            value: null,
            expected:  new Entry(null)
        }, {
            value: 4,
            expected:  new Entry(4)
        }, {
            value: 7,
            expected:  new Entry(7)
        }, {
            value: undefined,
            expected:  new Entry(undefined)
        }, {
            value: 1,
            expected:  new Entry(1)
        }, {
            value: 5,
            expected:  new Entry(5)
        }, {
            value: 'A',
            expected:  new Entry('A')
        }, {
            value: 'C',
            expected: new Entry('C')
        }, {
            value: {
                name: 'Oleg',
                age: 45
            },
            expected: new Entry({
                name: 'Oleg',
                age: 45
            })
        } ];

        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud find element = ${value} in Binary Search Tree and return Entry`, () => {
                
                const actual = JSON.stringify(mockTree.find(value).toString());
                assert.strictEqual(actual, JSON.stringify(expected.toString()));
            });
        });
    });

    describe('Binary search tree -> Remove method',()=>{
        describe('Remove node',()=>{
            var treeEx = new BinaryTree();
            beforeEach(function() {

                let A= new Entry(8);

                let B1 = new Entry(6);
                let B2 = new Entry(10);

                let C1 = new Entry(4);
                let C2 = new Entry(7);

                let C3 = new Entry(9);

                treeEx.root=A;

                A.left=B1;
                A.right=B2;
                B1.parent=A;
                B2.parent=A;

                B1.left=C1;
                B1.right=C2;
                C1.parent=B1;
                C2.parent=B1;

                B2.left=C3;
                C3.parent=B2;
                //
            });
            it('delete node with value 11 without tail', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                tree.remove(11);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });
        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(8);

                let B1 = new Entry(6);
                let B2 = new Entry(10);

                let C1 = new Entry(5);
                let C2 = new Entry(7);

                let C3 = new Entry(9);
                let C4 = new Entry(11);

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;

                B1.left = C1;
                B1.right = C2;
                C1.parent = B1;
                C2.parent = B1;

                B2.left = C3;
                B2.right = C4;
                C3.parent = B2;
                C4.parent = B2;

            });
            it('delete left parent\'s node with right tail', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                tree.insert(5);
                tree.remove(4);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });
        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(8);

                let B1 = new Entry(4);
                let B2 = new Entry(10);

                let C2 = new Entry(7);
                let C3 = new Entry(9);
                let C4 = new Entry(11);

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;

                B1.right = C2;
                C2.parent = B1;

                B2.left = C3;
                B2.right = C4;
                C3.parent = B2;
                C4.parent = B2;

            });
            it('delete node with right kid', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                //tree.insert(3);
                tree.remove(6);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });
        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(8);

                let B1 = new Entry(6);
                let B2 = new Entry(9);

                let C1 = new Entry(4);
                let C2 = new Entry(7);

                let C3 = new Entry(11);

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;

                B1.left = C1;
                B1.right = C2;
                C1.parent = B1;
                C2.parent = B1;

                B2.right = C3;
                //B2.right = C4;
                C3.parent = B2;
                //C4.parent = B2;

            });
            it('delete node with right and left kids', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                tree.remove(10);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });

        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(8);

                let B1 = new Entry(6);
                let B2 = new Entry(9);

                let C1 = new Entry(4);
                let C2 = new Entry(7);

                let C3 = new Entry(11);
                let C4 = new Entry(13);

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;

                B1.left = C1;
                B1.right = C2;
                C1.parent = B1;
                C2.parent = B1;

                B2.right = C3;
                C3.right = C4;
                C3.parent = B2;
                C4.parent = C3;

            });
            it('delete node with left kid and right kid with tail', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                tree.insert(13);
                tree.remove(10);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });

        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(8);

                let B1 = new Entry(6);
                let B2 = new Entry(9);

                let C1 = new Entry(4);
                let C2 = new Entry(7);

                let C3 = new Entry(11);
                let C4 = new Entry(13);
                let D1 = new Entry(14)

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;

                B1.left = C1;
                B1.right = C2;
                C1.parent = B1;
                C2.parent = B1;

                B2.right = C3;
                C3.right = C4;
                C3.parent = B2;
                C4.parent = C3;
                C4.right = D1;
                D1.parent = C4;

            });
            it('delete node with left kid and right kid with long tail', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);
                tree.insert(13);
                tree.insert(14);
                tree.remove(10);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });

        });
        describe('Remove node', () => {
            var treeEx = new BinaryTree();
            beforeEach(function () {

                let A = new Entry(6);

                let B1 = new Entry(4);
                let B2 = new Entry(10);

                let C1 = new Entry(7);
                let C2 = new Entry(11);

                let D1 = new Entry(9);

                treeEx.root = A;

                A.left = B1;
                A.right = B2;
                B1.parent = A;
                B2.parent = A;


                B2.right = C2;
                C2.parent = B2;
                B2.left = C1;
                C1.parent = B2;

                C1.right = D1;
                D1.parent = C1;

            });
            it('delete head of tree', function () {
                tree = new BinaryTree();
                tree.insert(8);

                tree.insert(6);
                tree.insert(10);

                tree.insert(4);
                tree.insert(7);
                tree.insert(9);
                tree.insert(11);

                tree.remove(8);
                var s1 = JSON.stringify(tree, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });


                var s2 = JSON.stringify(treeEx, function (key, value) {
                    if (key === 'parent') {
                        return undefined;
                    }
                    return value;
                });

                assert.equal(s1, s2);
            });

        });
    });
});

describe('CanvasMock and ContextMock', ()=> {
    it('should be able to return width and height', ()=> {
        let canvas = new CanvasMock(500,600);
        assert.equal(canvas.width, 500);
        assert.equal(canvas.height, 600);
    });
    it('should be able to update mock for getContext', ()=> {
        let canvas = new CanvasMock(500,600);
        let ctx = canvas.getContext('2d');
        assert.equal(canvas.mock, '[getContext 2d]');
    });
});

describe('drawCanvas', ()=> {
    it('should be able to return correct canvas', ()=> {
        let testCanvas = new CanvasMock(500,600);
        let ctx = testCanvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(8,8);
        ctx.stroke();
        assert.strictEqual(JSON.stringify(drawCanvas(new CanvasMock(500,600), 8, 8)), JSON.stringify(ctx));
    });
});

describe('VisualTree constructor', () => {
    const testData = [{
        expected: `binaryTree`
    }, {
        expected: `canvas`
    }, {
        expected: `R`
    }, {
        expected: `W`
    }, {
        expected: `H`
    }, {
        expected: `clearScreen`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let visTree = new VisualTree();
        it(`should return True, when visual BSTree has ${expected} prop/method`, function () {
            const actual = expected in visTree;
            assert.deepEqual(actual, true);
        });
    });
});

describe('VisualTree prototype', () => {
    const testData = [{
        expected: `clear`
    }, {
        expected: `clearScreen`
    }, {
        expected: `drawNode`
    }, {
        expected: `toString`
    }, {
        expected: `toArray`
    }, {
        expected: `displayElement`
    }, {
        expected: `insert`
    }, {
        expected: `remove`
    }, {
        expected: `find`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let visTree = new VisualTree();
        
        it(`should return True, when visual BSTree has ${expected} prop/method`, function () {
            const actual = expected in visTree;
            assert.strictEqual(actual, true);
        });
    });
});

describe('Visual BSTree methods', () => {
    describe('Visual BSTree -> ToArray method', () => {
        it('shoud return new sorted array of visTree --> [8, 4, 12, 2, 6, 10, 14]', () => {

            let visualTree = new VisualTree();
            visualTree.insert(8);
            visualTree.insert(4);
            visualTree.insert(12);
            visualTree.insert(2);
            visualTree.insert(6);
            visualTree.insert(10);
            visualTree.insert(14);

            let visArr = [ 2, 4, 6, 8, 10, 12, 14 ];
            const actual = visualTree.toArray();
            assert.deepEqual(actual, visArr);
        });
    });

    describe('Visual BSTree -> ToString method', () => {
        it('shoud return new string (sorted) of visTree --> 8, 4, 12, 2, 6, 10, 14', () => {

            let visualTree = new VisualTree();
            visualTree.insert(8);
            visualTree.insert(4);
            visualTree.insert(12);
            visualTree.insert(2);
            visualTree.insert(6);
            visualTree.insert(10);
            visualTree.insert(14);

            let visStr = '2, 4, 6, 8, 10, 12, 14';
            const actual = visualTree.toString();
            assert.deepEqual(actual, visStr);
        });
    });

    describe('Visual BSTree -> Insert method', () => {
        const testData = [{
            value: 8,
            expected: [8]
        }, {
            value: 4,
            expected: [4, 8]
        }, {
            value: 12,
            expected: [4, 8, 12]
        }, {
            value: 2,
            expected: [2, 4, 8, 12]
        }, {
            value: 6,
            expected: [2, 4, 6, 8, 12]
        }, {
            value: 10,
            expected: [2, 4, 6, 8, 10, 12]
        }, {
            value: 14,
            expected: [2, 4, 6, 8, 10, 12, 14]
        }, ];

        let visTree = new VisualTree();
        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud insert element = ${value} in visual BSTree`, () => {
                let outStr = [];
                visTree.insert(value);
                outStr = visTree.toArray();
                assert.deepEqual(outStr, expected);
            });
        });
    });

    describe('Visual BSTree -> Find method', () => {
        let visTree = new VisualTree();

        visTree.insert(8);
        visTree.insert(4);
        visTree.insert(12);
        visTree.insert(2);
        visTree.insert(6);
        visTree.insert(10);
        visTree.insert(14);

        const testData = [{
            value: 8,
            expected: true
        }, {
            value: 10,
            expected: true
        }, {
            value: 14,
            expected:  true
        }, {
            value: 6,
            expected:  true
        }, {
            value: 44,
            expected:  false
        }
        ];

        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud find element = ${value} in Visual BSTree and return flag`, () => {

                const actual = visTree.find(value);
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Visual BSTree -> Clear method', () => {
        let visTree = new VisualTree();

        visTree.insert(8);
        visTree.insert(4);
        visTree.insert(12);
        visTree.insert(2);
        visTree.insert(6);
        visTree.insert(10);
        visTree.insert(14);
        visTree.clear();

        const testData = [{
            value: 8,
            expected: false
        }, {
            value: 10,
            expected: false
        }, {
            value: 14,
            expected:  false
        }, {
            value: 6,
            expected:  false
        }, {
            value: 4,
            expected:  false
        }
        ];

        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud clear display and remove all elements includs element with value ${value} in tree  in Visual BSTree`, () => {
                const actual = visTree.find(value);
                assert.strictEqual(actual, expected);
                });
            });

    });
    describe('Visual BSTree -> getPosition method', () => {
        let visTree = new VisualTree();
        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(4);
        tree.insert(12);
        tree.insert(2);
        tree.insert(6);
        tree.insert(10);
        tree.insert(14);

        const testData = [{
            value: 8,
            expected: [0,0]
        }, {
            value: 4,
            expected: [1,0]
        }, {
            value: 12,
            expected:  [1,1]
        }, {
            value: 2,
            expected:  [2,0]
        }, {
            value: 6,
            expected:  [2,1]
        }
        , {
           value: 10,
           expected:  [2,2]
            }
        , {
           value: 14,
           expected:  [2,3]
            }
        ];

        testData.forEach(function (data) {

            const {
                value,
                expected
            } = data;
            it(`shoud return position of element = ${value} in Visual BSTree and return flag`, () => {

                const actual = visTree.getPosition(tree.find(value));

                let arrActual = [];
                arrActual[0] = actual.generation;
                arrActual[1] = actual.index;

                assert.deepEqual(arrActual, expected);
            });
        });
    });
    describe('Remove node',()=>{
        var treeEx = new BinaryTree();
        beforeEach(function() {

            let A= new Entry(8);

            let B1 = new Entry(6);
            //let B2 = new Entry(10);

            // let C1 = new Entry(4);
            // let C2 = new Entry(7);
            //
            // let C3 = new Entry(9);

            treeEx.root=A;

            A.left=B1;
            //A.right=B2;
            B1.parent=A;
            //B2.parent=A;

            // B1.left=C1;
            // B1.right=C2;
            // C1.parent=B1;
            // C2.parent=B1;
            //
            // B2.left=C3;
            // C3.parent=B2;
            //
        });
        it('delete node with value 11 without tail', function () {
            tree = new BinaryTree();
            tree.insert(8);

            tree.insert(6);
            tree.insert(10);

            // tree.insert(4);
            // tree.insert(7);
            // tree.insert(9);
            // tree.insert(11);
            VisualTree.prototype.remove.apply(tree,10);
            var s1 = JSON.stringify(tree, function (key, value) {
                if (key === 'parent') {
                    return undefined;
                }
                if (key === 'H') {
                    return undefined;
                }
                if (key === 'R') {
                    return undefined;
                }
                if (key === 'W') {
                    return undefined;
                }
                return value;
            });


            var s2 = JSON.stringify(treeEx, function (key, value) {
                if (key === 'parent') {
                    return undefined;
                }
                return value;
            });

            assert.equal(s1, s2);
        });
    });
    describe('Visual BSTree -> RGB Method', () => {
        const testData = [{
            red: 255,
            blue: 255,
            green: 255,
            expected: '#ffffff'
        },
        {
            red: 255,
            blue: 0,
            green: 0,
            expected: '#ff0000'
        },
            {
                red: 0,
                green: 255,
                blue: 0,
                expected: '#00ff00'
            },
            {
                red: 0,
                green : 0,
                blue: 255,
                expected: '#0000ff'
            }
            ,
            {
                red: 0,
                green : 0,
                blue: 0,
                expected: '#000000'
            },
            {
                red: 100,
                green : 100,
                blue: 100,
                expected: '#646464'
            },
            {
                red: 200,
                green : 200,
                blue: 200,
                expected: '#c8c8c8'
            }
            ,
            {
                red: 255,
                green : 100,
                blue: 0,
                expected: '#ff6400'
            },
            {
                red: 100,
                green : 255,
                blue: 0,
                expected: '#64ff00'
            },
            {
                red: 100,
                green : 0,
                blue: 255,
                expected: '#6400ff'
            }
        ];

        testData.forEach(function (data) {

            const {
                red,
                blue,
                green,
                expected
            } = data;
            it(`shoud return color ${expected} in visual BSTree`, () => {
                let outStr = RGB2HTML(red,green,blue);
                assert.deepEqual(outStr, expected);
            });
        });
    });

});
