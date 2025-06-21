import React from 'react';

/**
 * Loading Skeleton Component - Neural Network Training Animation
 *
 * This component provides visual feedback during loading states with
 * transformer-themed animations that suggest neural network training
 * or information processing.
 *
 * @example
 * <LoadingSkeleton variant="card" />
 * <LoadingSkeleton variant="text" lines={3} />
 * <LoadingSkeleton variant="avatar" size="lg" />
 */

interface LoadingSkeletonProps {
  /** Visual variant of the skeleton */
  variant?: 'text' | 'card' | 'avatar' | 'button' | 'custom';
  /** Number of lines for text variant */
  lines?: number;
  /** Size for avatar and button variants */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom width */
  width?: string;
  /** Custom height */
  height?: string;
  /** Custom className for styling */
  className?: string;
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'neural';
}

/**
 * Base skeleton element with neural network-inspired animations
 */
const SkeletonElement: React.FC<{
  className?: string;
  animation?: 'pulse' | 'wave' | 'neural';
  style?: React.CSSProperties;
}> = ({ className = '', animation = 'neural', style }) => {
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse',
    neural: 'neural-loading',
  };

  return (
    <div
      className={`
        bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 
        ${animationClasses[animation]}
        ${className}
      `}
      style={{
        backgroundSize: animation === 'wave' ? '200% 100%' : undefined,
        ...style,
      }}
    />
  );
};

/**
 * Text skeleton with multiple lines
 */
const TextSkeleton: React.FC<{
  lines: number;
  animation: LoadingSkeletonProps['animation'];
}> = ({ lines, animation = 'neural' }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }, (_, index) => (
        <SkeletonElement
          key={index}
          className={`
            h-4 rounded
            ${index === lines - 1 ? 'w-3/4' : 'w-full'}
          `}
          animation={animation}
        />
      ))}
    </div>
  );
};

/**
 * Card skeleton with header and content areas
 */
const CardSkeleton: React.FC<{
  animation: LoadingSkeletonProps['animation'];
}> = ({ animation = 'neural' }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-6 space-y-4">
      {/* Header area */}
      <div className="flex items-center space-x-4">
        <SkeletonElement
          className="w-12 h-12 rounded-full flex-shrink-0"
          animation={animation}
        />
        <div className="flex-1 space-y-2">
          <SkeletonElement
            className="h-4 w-3/4 rounded"
            animation={animation}
          />
          <SkeletonElement
            className="h-3 w-1/2 rounded"
            animation={animation}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-3">
        <SkeletonElement className="h-4 rounded" animation={animation} />
        <SkeletonElement className="h-4 rounded" animation={animation} />
        <SkeletonElement className="h-4 w-5/6 rounded" animation={animation} />
      </div>

      {/* Footer area */}
      <div className="flex justify-between items-center pt-2">
        <SkeletonElement className="h-8 w-20 rounded" animation={animation} />
        <SkeletonElement className="h-8 w-16 rounded" animation={animation} />
      </div>
    </div>
  );
};

/**
 * Avatar skeleton with different sizes
 */
const AvatarSkeleton: React.FC<{
  size: LoadingSkeletonProps['size'];
  animation: LoadingSkeletonProps['animation'];
}> = ({ size = 'md', animation = 'neural' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <SkeletonElement
      className={`${sizeClasses[size]} rounded-full`}
      animation={animation}
    />
  );
};

/**
 * Button skeleton with different sizes
 */
const ButtonSkeleton: React.FC<{
  size: LoadingSkeletonProps['size'];
  animation: LoadingSkeletonProps['animation'];
}> = ({ size = 'md', animation = 'neural' }) => {
  const sizeClasses = {
    sm: 'h-8 w-20',
    md: 'h-10 w-24',
    lg: 'h-12 w-32',
    xl: 'h-14 w-40',
  };

  return (
    <SkeletonElement
      className={`${sizeClasses[size]} rounded-lg`}
      animation={animation}
    />
  );
};

/**
 * Main LoadingSkeleton component
 */
export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'text',
  lines = 3,
  size = 'md',
  width,
  height,
  className = '',
  animation = 'neural',
}) => {
  // Custom skeleton
  if (variant === 'custom') {
    return (
      <SkeletonElement
        className={className}
        animation={animation}
        style={{ width, height }}
      />
    );
  }

  // Render based on variant
  switch (variant) {
    case 'text':
      return <TextSkeleton lines={lines} animation={animation} />;

    case 'card':
      return <CardSkeleton animation={animation} />;

    case 'avatar':
      return <AvatarSkeleton size={size} animation={animation} />;

    case 'button':
      return <ButtonSkeleton size={size} animation={animation} />;

    default:
      return <TextSkeleton lines={lines} animation={animation} />;
  }
};

/**
 * Page loading component with neural network theme
 */
export const PageLoading: React.FC<{
  message?: string;
  showProgress?: boolean;
}> = ({
  message = 'Initializing neural pathways...',
  showProgress = false,
}) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        {/* Neural Network Loading Animation */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Animated neural network nodes */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-500 opacity-30 neural-pulse"></div>
            <div className="absolute inset-4 rounded-full border-2 border-secondary-500 opacity-50 neural-pulse delay-200"></div>
            <div className="absolute inset-8 rounded-full border-2 border-tertiary-500 opacity-70 neural-pulse delay-400"></div>

            {/* Center processing node */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary-500 rounded-full neural-pulse delay-100"></div>
            </div>

            {/* Connection lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-primary-500 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60 attention-flow"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-secondary-500 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-60 attention-flow delay-300"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-tertiary-500 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-60 attention-flow delay-500"></div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Neural Network
          <span className="block text-primary-500 text-lg">
            Training in Progress
          </span>
        </h2>

        <p className="text-gray-300 mb-6">{message}</p>

        {/* Progress Indicator */}
        {showProgress && (
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full neural-progress"></div>
          </div>
        )}

        {/* Processing Status */}
        <div className="text-sm text-gray-400 space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
            <span>Processing attention weights</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-secondary-500 rounded-full animate-ping delay-100"></div>
            <span>Encoding information layers</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-tertiary-500 rounded-full animate-ping delay-200"></div>
            <span>Optimizing neural pathways</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
