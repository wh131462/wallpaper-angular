import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWallpaperComponent } from './image-wallpaper.component';

describe('ImageWallpaperComponent', () => {
  let component: ImageWallpaperComponent;
  let fixture: ComponentFixture<ImageWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWallpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
