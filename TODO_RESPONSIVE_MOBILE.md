# TODO - Mobile Responsive Order Changes

## Task
Modify Hero and About components to change element order on mobile only:
- Mobile order: Text → Image/Video → Button
- Desktop: Keep current layout unchanged

## Progress

### Hero.tsx
- [x] Move CalendlyButtonLarge outside text container
- [x] Restructure with 3 ordered elements (text, video, button)
- [x] Apply order classes for mobile: order-1 (text), order-2 (video), order-3 (button)
- [x] Keep desktop layout: text left, video right, button below

### About.tsx
- [x] Move CalendlyButtonLarge outside content div
- [x] Restructure with 3 ordered elements (text, image, button)
- [x] Apply order classes for mobile: order-1 (text), order-2 (image), order-3 (button)
- [x] Keep desktop layout: image left, text right, button below

## Corrections Applied
- Fixed desktop layout by using `hidden lg:block` for desktop buttons inside text columns
- Mobile-only buttons use `lg:hidden` to appear only on mobile devices
- Desktop layout preserved: text with button below, then image/video

## Mobile Optimizations Applied
- **Hero.tsx**: Reduced title size (text-2xl on mobile), optimized spacing (mb-3/4/6), adjusted margins
- **About.tsx**: Increased title size to match Hero (text-3xl), improved paragraph size (text-base), reduced spacing
- **Consistent hierarchy**: Both sections now have balanced text sizes and spacing on mobile

## Testing
- [x] Verify mobile view shows: Text → Image/Video → Button
- [x] Verify desktop view remains unchanged (Hero: text left with button below, video right; About: image left, text right with button below)
- [ ] Test Calendly button functionality on both mobile and desktop
