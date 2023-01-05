import { BackDrop } from './Loader.styled';
import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BackDrop>
      <Vortex
        visible={true}
        height="140"
        width="140"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </BackDrop>
  );
};
