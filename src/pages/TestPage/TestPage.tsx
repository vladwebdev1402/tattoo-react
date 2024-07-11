import { Button } from '@/components/UI/button';

const TestPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '150px 0px' }}>
      <Button theme="light">light clip</Button>
      <Button theme="dark">dark clip</Button>
      <Button size="small">small</Button>
      <Button size="big">big</Button>
      <Button variant="text">text</Button>
      <Button borderStyle="default">default</Button>
    </div>
  );
};

export { TestPage };
