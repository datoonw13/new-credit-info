type Entity = 'PERSON' | 'COMPANY';

type EntitySelectorProps = {
  entity: Entity;
  lastStep: number;
  selectedType: Entity;
  onPress: () => void;
};

type EntitySelectorFC = (props: EntitySelectorProps) => JSX.Element;
