import { AngularMaterialLoaderModule } from './angular-material-loader.module';

describe('AngularMaterialLoaderModule', () => {
  let angularMaterialLoaderModule: AngularMaterialLoaderModule;

  beforeEach(() => {
    angularMaterialLoaderModule = new AngularMaterialLoaderModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialLoaderModule).toBeTruthy();
  });
});
