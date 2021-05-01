import {ForwardedRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

interface BottomSheetModalWithAdditionalProperties extends BottomSheetModal {
  open?: () => void;
}

type PaymentTypeModalRef = ForwardedRef<BottomSheetModalWithAdditionalProperties>;

type PaymentTypeItemProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

type PaymentTypeItemFC = (props: PaymentTypeItemProps) => JSX.Element;

type PaymentType = 'WithCurrentCard' | 'WithOtherCard';

type ChoosePaymentTypeProps = {
  visible: boolean;
};

type ChoosePaymentTypeFC = (
  props: ChoosePaymentTypeProps,
) => JSX.Element | null;
