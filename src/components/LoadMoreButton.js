import React from 'react';

function LoadMoreButton() {
  return (
    /* Component 분리 필요 */
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#FFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Load more →
      </button>
    </div>
  );
}

export default LoadMoreButton;
