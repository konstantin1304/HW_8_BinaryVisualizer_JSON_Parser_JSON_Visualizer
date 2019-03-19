function Entry(value, parent) {

  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = parent;
  this.toString = () => {
    let strEntry = this.value;
    return strEntry;
  };
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.empty = function () {
  this.root = null;
}

BinaryTree.prototype.toArray = function () {

  let result = [];
  let entry = this.root;
  let traverse = function (entry) {
    entry.left && traverse(entry.left);
    result.push(entry.value);
    entry.right && traverse(entry.right);
  };
  traverse(entry);
  return result;
}

BinaryTree.prototype.toString = function () {

  let arrEntryValue = this.toArray();
  let outEntryString = '';

  arrEntryValue.forEach(function (element) {
    outEntryString += element + ", ";
  });
  outEntryString = outEntryString.slice(0, -2);
  return outEntryString;
}

BinaryTree.prototype.insert = function (value) {

  if (this.root === null) {
    this.root = new Entry(value, null);
    return this.root;
  } else {
      return recInsert(value, this.root);
  }

  function recInsert(value, entry) {
    if (value > entry.value) {
      if (entry.right === null) {
        entry.right = new Entry(value, entry);
        return entry.right;
      } else {
          return recInsert(value, entry.right);
      }
    } else {
      if (entry.left === null) {
        entry.left = new Entry(value, entry);
        return entry.left;
      } else {
          return recInsert(value, entry.left);
      }
    }
  }
}

BinaryTree.prototype.find = function (value) {

  if (this.root === null) {
    return null;
  } else {
    return recFind(value, this.root);
  }

  function recFind(value, entry) {
    if (JSON.stringify(entry.value) === JSON.stringify(value)) {
      return entry;
    }
    if (value > entry.value) {
      if (entry.right === null) {
        return null;
      } else {
        return recFind(value, entry.right);
      }
    } else {
      if (entry.left === null) {
        return null;
      } else {
        return recFind(value, entry.left);
      }
    }
  }
}

BinaryTree.prototype.remove = function (value) {
    let delElement = this.find(value);
    if(delElement===this.root) {
       this.root=null;
        let resElements = [];
        let childArr=[];
        if(delElement.left!=null){
            childArr.push(delElement.left);
        }
        if(delElement.right!=null){
            childArr.push(delElement.right);
        }

        while(childArr.length>0) {
            let newArr=[];
            for (let i = 0; i < childArr.length; i++){
                let el = childArr[i];
                resElements.push(this.insert(el.value));
                if(el.left!==null){
                    newArr.push(el.left);
                }
                if(el.right!==null){
                    newArr.push(el.right);
                }
            }
            childArr = newArr;
        }
        return {delElement:delElement,movedArr:resElements};
       //return{delElement:delElement,movedArr:[]};
    }
    if(delElement.parent.left==delElement){
        delElement.parent.left=null;
    }else if(delElement.parent.right==delElement){
        delElement.parent.right=null;
    }
     delElement.parent=null;

    let resElements = [];
    let childArr=[];
    if(delElement.left!=null){
        childArr.push(delElement.left);
    }
    if(delElement.right!=null){
        childArr.push(delElement.right);
    }

    while(childArr.length>0) {
        let newArr=[];
        for (let i = 0; i < childArr.length; i++){
            let el = childArr[i];
            resElements.push(this.insert(el.value));
            if(el.left!==null){
                newArr.push(el.left);
            }
            if(el.right!==null){
                newArr.push(el.right);
            }
        }
        childArr = newArr;
    }
    return {delElement:delElement,movedArr:resElements};
}

//BinaryTree.prototype.remove = function (value) {
//
//    let delElement = this.find(value);
//    if(delElement === this.root){
//        this.root = null;
//        removeSimple.call(this, delElement);
//        return delElement;
//    }
//
//    //Отсутствие детей у удаляемого элемента
//    if (delElement.left === null && delElement.right === null) {
//        if (delElement.parent.left === delElement) {
//            delElement.parent.left = null;
//        }
//        if (delElement.parent.right === delElement) {
//            delElement.parent.right = null;
//        }
//        delElement.parent = null;
//        return delElement;
//    }
//
//    //Присутствие только левого ребенка(ветки) у удаляемого элемента
//    if (delElement.right === null) {
//        if (delElement.parent.left === delElement) {
//            delElement.parent.left = delElement.left;
//        }
//        if (delElement.parent.right === delElement) {
//            delElement.parent.right = delElement.left;
//        }
//        delElement.parent = null;
//        return delElement;
//    }
//
//
//    //Оба потомка присутствуют:
//    if (delElement.right !== null) {
//        //Родитель удаляемого елемента слева
//        if (delElement.parent.left === delElement) {
//            //Отсутствие левого ребенка у удаляемого элемента
//            if (delElement.left === null) {
//                let insEl = findMinimum(delElement.right);
//                //Есть правый ребенок у самого крайнего левого элемента для подстановки
//                if (insEl.right !== null) {
//                    insEl.parent.left = insEl.right;
//                    insEl.right.parent = insEl.parent.left;
//
//                    insEl.parent = delElement.parent;
//                    insEl.right = delElement.right;
//
//                    delElement.right.parent = insEl;
//                    delElement.parent.left = insEl;
//                }
//                //Нет правого ребенка у самого крайнего левого элемента для подстановки
//                else {
//                    insEl.parent = delElement.parent;
//                    //insEl.right = delElement.right;
//
//                    //delElement.right.parent = insEl;
//                    delElement.parent.left = insEl;
//                    return delElement;
//                }
//
//            }
//            //Присутствие левого ребенка у удаляемого элемента
//            else {
//                let insEl = findMinimum(delElement.right);
//                //Есть правый ребенок у самого крайнего левого элемента для подстановки
//                if (insEl.right !== null) {
//                    insEl.parent.left = insEl.right;
//                    insEl.right.parent = insEl.parent.left;
//
//                    insEl.parent = delElement.parent;
//                    insEl.right = delElement.right;
//                    insEl.left = delElement.left;
//
//                    delElement.right.parent = insEl;
//                    delElement.parent.left = insEl;
//                    return delElement;
//                }
//                //Нет правого ребенка у самого крайнего левого элемента для подстановки
//                else {
//                    insEl.left = delElement.left;
//                    insEl.parent = delElement.parent;
//
//                    delElement.parent.left = insEl;
//                    delElement.left.parent = insEl;
//                    return delElement;
//                }
//            }
//        }
//        //Родитель удаляемого елемента справа
//        if (delElement.parent.right === delElement) {
//            //Отсутствие левого ребенка у удаляемого элемента
//            if (delElement.left === null) {
//                let insEl = findMinimum(delElement.right);
//                //Есть правый ребенок у самого крайнего левого элемента для подстановки
//                if (insEl.right !== null) {
//                    insEl.parent.left = insEl.right;
//                    insEl.right.parent = insEl.parent.left;
//
//                    insEl.parent = delElement.parent;
//                    insEl.right = delElement.right;
//                    delElement.right.parent = insEl;
//                    delElement.parent.right = insEl;
//                }
//                //Нет правого ребенка у самого крайнего левого элемента для подстановки
//                else {
//                    insEl.parent = delElement.parent;
//                    insEl.right = delElement.right;
//                    delElement.right.parent = insEl;
//                    delElement.parent.right = insEl;
//                }
//            }
//            //Присутствие левого ребенка у удаляемого элемента
//            else {
//                let insEl = findMinimum(delElement.right);
//                //Есть правый ребенок у самого крайнего левого элемента для подстановки
//                if (insEl.right !== null) {
//
//                    insEl.left = delElement.left;
//                    insEl.parent = delElement.parent;
//
//                    delElement.parent.right = insEl;
//                    delElement.left.parent = insEl;
//                    return delElement;
//
//                }
//                else {
//                    //Нет правого ребенка у самого крайнего левого элемента для подстановки
//                    insEl.left = delElement.left;
//                    insEl.parent = delElement.parent;
//
//                    delElement.parent.right = insEl;
//                    delElement.left.parent = insEl;
//
//
//                }
//            }
//        }
//
//
//
//        function findMinimum(node) {
//            if (node.left == null) {
//                //node.parent.left = null;
//                return node;
//            }
//            return findMinimum(node.left)
//        }
//    }
//    function removeSimple(node){
//        let left = node.left;
//        let right = node.right;
//        node.parent = null;
//        node.left = null;
//        node.right = null;
//        if(left !== null){
//            recAdd.call(this,left);
//        }
//        if(right !== null){
//            recAdd.call(this,right);
//        }
//        function recAdd(node){
//            this.insert(node.value);
//            let left = node.left;
//            let right = node.right;
//            if(left !== null){
//                recAdd.call(this,left);
//            }
//            if(right !== null){
//                recAdd.call(this,right);
//            }
//        }
//
//    }
//
//    return delElement;
//}




