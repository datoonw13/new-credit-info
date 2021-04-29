import {ForwardedRef, RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

interface BottomSheetModalWithAdditionalProperties extends BottomSheetModal {
  open?: () => void;
}

type PaymentTypeModalRef = ForwardedRef<BottomSheetModalWithAdditionalProperties>;
