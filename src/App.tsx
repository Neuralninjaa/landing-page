import { Button } from './components/Button/Button';

function App() {
  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <h1>Button Component Test</h1>
      
      {/* Varyasyonlar */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      {/* Boyutlar */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* Durumlar */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  );
}

export default App;