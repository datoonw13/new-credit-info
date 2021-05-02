type SaveCardOrNotProps = {
  visible: boolean;
  handler: () => void;
};

interface SaveCardOrNotFC {
  (props: SaveCardOrNotProps): JSX.Element | null;
}
