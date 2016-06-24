        // <editor-prop title="Position" prop="{{target.position}}"></editor-prop>
        // <editor-prop title="Rotation" prop="{{target.rotation}}"></editor-prop>
        //  <!--<editor-prop title="Scale" prop="{{target.scale}}"></editor-prop>
        // <editor-prop title="Anchor" prop="{{target.anchor}}"></editor-prop>
        // <editor-prop title="Size" prop="{{target.size}}"></editor-prop>
        // <editor-prop title="Color" prop="{{target.color}}"></editor-prop>
        // <editor-prop title="Opacity" prop="{{target.opacity}}"></editor-prop>
        // <editor-prop title="Skew" prop="{{target.skew}}"></editor-prop>
function NodeData(node) {
    this._node = node;
}

NodeData.prototype = {
    get position() {
        return {
            path: "position",
            type: "vec2",
            name: "Position",
            attrs: {
                min: 1,
                max: 100,
            },
            value: {
                x: this._node.getPositionX(),
                y: this._node.getPositionY(),
            }
        }
    },

    get rotation() {
        return {
            path: "rotation",
            type: "Number",
            name: "Rotation",
            attrs: {
                min: 1,
                max: 100,
            },
            value: this._node.getRotation()
        }
    },

    setAttrib(path, value) {
        if(path == "position.x") {
            this._node.setPositionX(value);
        } else if(path == "position.y") {
            this._node.setPositionY(value);
        }
    },
}