# Mathematical Models and Formulas

> **Instructions**: This is an example file. Create your own `mathematic_model.md` with your research-specific formulas and models.

---

## Model Predictive Control (MPC) - Example

### 1. Standard MPC Formulation

**Objective Function**:
```
minimize: J = Σ(||x(k) - x_ref||²_Q + ||u(k)||²_R)
          k=0 to N-1
```

Where:
- `x(k)`: state at time k
- `u(k)`: control input at time k
- `Q`: state weighting matrix
- `R`: control weighting matrix
- `N`: prediction horizon

**Subject to**:
```
x(k+1) = A·x(k) + B·u(k)        [System dynamics]
x_min ≤ x(k) ≤ x_max             [State constraints]
u_min ≤ u(k) ≤ u_max             [Input constraints]
```

**Reference**: Kong et al. (2015), "Model Predictive Control for Autonomous Vehicles", IEEE TITS.

---

### 2. Nonlinear MPC

**Objective**:
```
minimize: J = Σ(l(x(k), u(k))) + V_f(x(N))
          k=0 to N-1
```

**Dynamics**:
```
x(k+1) = f(x(k), u(k))
```

Where `f(·)` is a nonlinear function.

**Reference**: Rawlings & Mayne (2009), Model Predictive Control: Theory and Design.

---

### 3. Vehicle Kinematic Model

**Bicycle Model**:
```
ẋ = v·cos(ψ + β)
ẏ = v·sin(ψ + β)
ψ̇ = (v/l_r)·sin(β)
β = arctan((l_r/(l_f + l_r))·tan(δ))
```

Where:
- `(x, y)`: position
- `ψ`: heading angle
- `v`: velocity
- `δ`: steering angle
- `β`: slip angle
- `l_f, l_r`: front/rear axle distances

**Reference**: Polack et al. (2017), "The Kinematic Bicycle Model: A Consistent Model for Planning Feasible Trajectories", IEEE Intelligent Vehicles.

---

## Control System Stability

### Lyapunov Stability

A system is stable if there exists a Lyapunov function `V(x)` such that:
```
V(x) > 0  for all x ≠ 0
V̇(x) < 0  for all x ≠ 0
```

**Reference**: Khalil, H. (2002), Nonlinear Systems, 3rd Edition.

---

## Optimization

### Quadratic Programming (QP)

**Standard form**:
```
minimize: (1/2)·x^T·H·x + f^T·x
subject to: A·x ≤ b
            A_eq·x = b_eq
```

**Solvers commonly used**:
- qpOASES
- OSQP
- Gurobi

**Reference**: Nocedal & Wright (2006), Numerical Optimization.

---

## Notes

- Update this file as you discover new formulas and models
- Include references so you can trace back to original papers
- Use consistent notation throughout

---

**Last Updated**: [Date]
