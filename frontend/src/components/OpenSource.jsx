import React from 'react';

const contributions = [
  {
    project: 'probe-rs (Rust)',
    text: 'Submitted a hardware-tested STM32N6 interrupt-startup fix.',
    ref: 'PR #4703',
    status: 'open',
    link: 'https://github.com/probe-rs/probe-rs/pull/4703'
  },
  {
    project: 'PX4 Autopilot (C++)',
    text: 'Fixed DroneCAN GNSS timestamp conversion and added 20 regression tests.',
    ref: 'PR #29803',
    status: 'open',
    link: 'https://github.com/PX4/PX4-Autopilot/pull/29803'
  },
  {
    project: 'PX4 SIH',
    text: 'Investigating EKF2-disabled lockstep startup freezes via boot tests and scheduler analysis.',
    ref: 'Issue #29715',
    status: 'ongoing',
    link: 'https://github.com/PX4/PX4-Autopilot/issues/29715'
  },
  {
    project: 'cortex-m (Rust)',
    text: 'Removed a redundant non-Cortex-M stub for interrupt::free.',
    ref: 'PR #690',
    status: 'merged',
    link: 'https://github.com/rust-embedded/cortex-m/pull/690'
  }
];

const OpenSource = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '24px',
        color: 'var(--fg-strong)',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '8px'
      }}>
        Open Source Contributions
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {contributions.map((c, index) => (
          <div key={index} style={{ paddingLeft: '12px', borderLeft: '3px solid var(--border)' }}>
            <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--fg-strong)', marginBottom: '6px' }}>
              {c.project}
            </p>
            <p style={{ fontSize: '14px', color: 'var(--fg-2)' }}>
              {c.text}{' '}
              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-btn)' }}>
                {c.ref}
              </a>{' '}
              ({c.status})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
