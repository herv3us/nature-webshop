import { useEffect } from 'react';
import { useRecoilValue } from 'recoil'

interface Props {
    node: any,
    onChange: Function
}

export const RecoilObserver = ({node, onChange} : Props ) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};