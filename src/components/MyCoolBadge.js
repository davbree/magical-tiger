import * as React from 'react';
import classNames from 'classnames';

export default function Badge(props) {
    const { label, warning } = props;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const annotationPrefix = props.annotationPrefix || '';

    if (!label) {
        return null;
    }
  const text = warning ? `🍔 ${label}` : label;

    return (
        <div
            id={cssId}
            className={classNames('px-8', 'mb-9', 'sb-component', 'sb-component-block', 'sb-component-badge', cssClasses)}
            data-sb-field-path={`${annotationPrefix}.label ${annotationPrefix}.elementId#@id`}
        >
            {text}
        </div>
    );
}
