import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const LinearGradientStyles = theme =>
  StyleSheet.create({ 'Linear Gradient': { style: { flex: 1 }, props: {} } });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const CenterStyles = theme =>
  StyleSheet.create({
    Center: {
      style: { alignItems: 'center', justifyContent: 'center' },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const VideoPlayerStyles = theme =>
  StyleSheet.create({ Video: { style: { height: 215 }, props: {} } });

export const LottieAnimationStyles = theme =>
  StyleSheet.create({
    'Lottie Animation': { style: { height: 100, width: 100 }, props: {} },
  });
