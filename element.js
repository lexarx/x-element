/**
 * Creates a DOM element, sets its properties and childNodes.
 * @param {String} tagName
 * @param {Object} [properties]
 * @param {Node|Array<Node>} [children]
 */
function createElement(tagName, properties, children) {
	const element = document.createElement(tagName);
	if (properties !== undefined && properties !== null) {
		for (var name in properties) {
			element[name] = properties[name];
		}
	}
	if (children !== undefined && children !== null) {
		if (children instanceof Array) {
			for (var i = 0; i < children.length; i++) {
				element.appendChild(children[i]);
			}
		} else {
			element.appendChild(children);
		}
	}
	return element;
};

module.exports = createElement;