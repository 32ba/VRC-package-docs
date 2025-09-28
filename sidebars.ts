import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'ドキュメントの構成',
    },
    {
      type: 'category',
      label: 'パッケージ',
      items: [
        {
          type: 'category',
          label: 'Lattice Deformation Tool',
          items: [
            'packages/vrc-lattice-deformation-tool/overview',
            {
              type: 'category',
              label: 'インストール',
              items: [
                'packages/vrc-lattice-deformation-tool/install/prerequisites',
              ],
            },
            {
              type: 'category',
              label: 'クイックスタート',
              items: [
                'packages/vrc-lattice-deformation-tool/quickstart/basic-workflow',
              ],
            },
            {
              type: 'category',
              label: 'トラブルシュート',
              items: [
                'packages/vrc-lattice-deformation-tool/troubleshooting/common-issues',
              ],
            },
            {
              type: 'category',
              label: 'リファレンス',
              items: [
                'packages/vrc-lattice-deformation-tool/reference/settings',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
