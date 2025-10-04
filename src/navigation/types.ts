import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ROUTES } from "./routes";

export type ProfileStackParamList = {
  [ROUTES.PROFILE]: undefined;
  [ROUTES.LOCATION]: undefined;
};

export type MainNavigatorProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
};

export type AuthStackParamList = {
  [ROUTES.LOGIN_SCREEN]: undefined;
  [ROUTES.REGISTRATION]: undefined;
};

export type DrawerParamList = {
  [ROUTES.BOTTOM_TABS]: undefined;
};

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PRODUCTLIST_SCREEN]: undefined;
  [ROUTES.PRODUCT_DETAILS]: { id: string };
  [ROUTES.PROFILE]: undefined;
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;
  [ROUTES.LOCATION]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ThemeType = "light" | "dark";

export type CustomButtonProps = {
  title: string;
  onPress: () => void;
  children?: React.ReactNode;
  theme?: ThemeType;
  style?: object;
  textStyle?: object;
};

export type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: number;
  onPress?: () => void;
  isSelected?: boolean;
  theme?: ThemeType;
};

export type ProductListScreenProps =
  RootStackScreenProps<typeof ROUTES.PRODUCTLIST_SCREEN>;
