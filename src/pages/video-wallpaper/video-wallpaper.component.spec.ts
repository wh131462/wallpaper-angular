import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWallpaperComponent } from './video-wallpaper.component';

describe('VideoWallpaperComponent', () => {
  let component: VideoWallpaperComponent;
  let fixture: ComponentFixture<VideoWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoWallpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
