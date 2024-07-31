/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="josefinSans"
      rel="preload"
      href="/fonts/JosefinSans-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="josefinSans-regular"
      rel="preload"
      href="/fonts/JosefinSans-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="josefinSans-SemiBold"
      rel="preload"
      href="/fonts/JosefinSans-SemiBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="josefinSans-bold"
      rel="preload"
      href="/fonts/JosefinSans-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
  ]);
};