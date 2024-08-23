import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components-build',
      customElementsExportBehavior: 'single-export-module'
    },
    {
      type: 'www'
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'standalone',
      customElementsDir: 'components-build',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ]
};
