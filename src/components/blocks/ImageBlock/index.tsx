import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Link from '../../atoms/Link';

export default function ImageBlock(props) {
    const { elementId, className, imageClassName, url, altText = '', styles = {}, link } = props;
    if (!url) {
        return null;
    }
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};
    const linkAnnotations = fieldPath && link?.url
        ? { 'data-sb-field-path': [`${fieldPath}.link.url#@href`, `${fieldPath}.link.altText#@aria-label`].join(' ').trim() }
        : {};

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-image-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined
            )}
            {...annotations}
        >
            {link?.url ? (
                <Link href={link.url} aria-label={link.altText || altText} {...linkAnnotations}>
                    <img
                        id={elementId}
                        className={classNames(
                            imageClassName,
                            styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                            styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                                ? mapStyles({
                                      borderWidth: styles?.self?.borderWidth,
                                      borderStyle: styles?.self?.borderStyle,
                                      borderColor: styles?.self?.borderColor ?? 'border-primary'
                                  })
                                : undefined,
                            styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
                        )}
                        src={url}
                        alt={altText}
                    />
                </Link>
            ) : (
                <img
                    id={elementId}
                    className={classNames(
                        imageClassName,
                        styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                        styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                            ? mapStyles({
                                  borderWidth: styles?.self?.borderWidth,
                                  borderStyle: styles?.self?.borderStyle,
                                  borderColor: styles?.self?.borderColor ?? 'border-primary'
                              })
                            : undefined,
                        styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
                    )}
                    src={url}
                    alt={altText}
                />
            )}
        </div>
    );
}
