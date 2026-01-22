const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );
=======
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'spotify-secret-key-2024',
      { expiresIn: '7d' }
    );
