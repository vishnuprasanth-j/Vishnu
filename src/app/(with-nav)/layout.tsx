import { Nav } from '@/components/nav/Nav';

export default function LayoutWithNav({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className='w-full px-6 md:max-w-xl'>{children}</main>
    </>
  );
}
