export default function SubmitModal({ stats, onCancel, onConfirm }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <section className="submit-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="submit-title" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-icon">✓</div>
        <h2 id="submit-title">Submit this test?</h2>
        <p>You can’t change answers after submission.</p>

        <div className="submit-summary">
          <div><strong>{stats.answered}</strong><span>Answered</span></div>
          <div><strong>{stats.unanswered}</strong><span>Unanswered</span></div>
          <div><strong>{stats.review}</strong><span>For review</span></div>
        </div>

        <div className="modal-actions">
          <button className="secondary-button" onClick={onCancel}>Continue test</button>
          <button className="danger-button" onClick={onConfirm}>Submit now</button>
        </div>
      </section>
    </div>
  );
}
