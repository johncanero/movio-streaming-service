'use client';

import { Root, Portal, Overlay, Content } from '@radix-ui/react-dialog';
import useMobileMenuModal from '@/app/hooks/useMobileMenuModal';

const MobileMenuModal = () => {
    const { isOpen, onClose } = useMobileMenuModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Portal>
                <Overlay className='fixed inset-0 z-30 bg-neutral-900/90' />
                <Content
                    className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          z-40 border-none h-[80%]'
                >
                    <div
                        className='flex flex-col items-center h-full justify-evenly'
                        onClick={() => onChange(false)}
                    >
                        <p className='text-sm text-white shadow-xl cursor-pointer sm:text-xl'>
                            Home
                        </p>
                        <p className='text-sm text-white shadow-xl cursor-pointer sm:text-xl'>
                            TV Series
                        </p>
                        <p className='text-sm text-white shadow-xl cursor-pointer sm:text-xl'>
                            Movies
                        </p>
                        <p className='mx-12 text-sm text-white shadow-xl cursor-pointer sm:text-xl'>
                            New & Popular
                        </p>
                        <p className='text-sm text-white shadow-xl cursor-pointer sm:text-xl'>
                            My List
                        </p>
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};

export default MobileMenuModal;