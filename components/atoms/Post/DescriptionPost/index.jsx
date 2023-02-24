import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import React from 'react';
import styles from './styles.module.scss';

const Text = ({ children }) => <p className={styles[`description`]}>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: (text) => text.replace('!', '?'),
};

export default function DescriptionPost({text}) {
  return (
    <>{documentToReactComponents(text, options)}</>
  )
}
