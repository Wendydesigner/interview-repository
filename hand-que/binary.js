import { read, watch } from "fs";
import { initEvents } from "../../origin-code/vue/src/core/instance/events";
import { initLifecycle, updateChildComponent } from "../../origin-code/vue/src/core/instance/lifecycle";
import { initState } from "../../origin-code/vue/src/core/instance/state";

var res = [];
function preload(root) {
    if(!root) return;
    res.push(root.value);
    preload(root.left);
    preload(root.right);
    return res;
}

function preLoad(root) {
    var stack = [];
    var result = [];
    while(root || stack.length) {
        if(root) {
            res.push(root.value);
            stack.push(root);
            root = root.left;
        } else {
            var proot = stack.pop();
            root = proot.right;
        }
    }
    return result;
}

function nextLoad(root) {
    var stack1 = [];
    var stack2 = [];
    stack1.push(root);
    while(root || stack1.length) {
        root = stack1.pop();
        stack2.push(root);
        if(root.left) {
            stack1.push(root.left);
        }
        if(root.right) {
            stack1.push(root.right)
        }
    }
    while(stack.length) {
        res.push(stack2.pop().value);
    }
    return res;
}

init
initLifecycle 
beforeCreated 
initState 
created
$mounted
render
beforeMounted
renderfunction
mounted
updated
Diff
watcher.beforeUpdated

var arr = [1,[2,[4,5]]]
Array.prototype.flat = function() {
    this.toString().split(',').map(item => +item )
}
const b = arr.flat();
console.log(b)