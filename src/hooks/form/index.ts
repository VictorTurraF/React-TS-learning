import * as React from 'react';

/**
 * Hook type
 * @template E Form Entity
 */
type UseValidation<E> = {
  errors: Errors<E> | undefined;
  setErrors: (errors: Errors<E>) => void;
  isValid: boolean;
  validate: (entity: Partial<E>) => boolean;
};

/**
 * Status state type
 * @template E Form entity
 */
type Status<E> = {
  isValid: boolean;
  errors: Errors<E>;
};

/**
 * Object Entity's Errors
 * All keys of given Entity have a error message string
 * @template E Form entity
 */
export type Errors<E> = Partial<Record<keyof E, string>>;

/**
 * Validator callback type
 * @template E Form entity
 */
export type Validate<E> = (entity: Partial<E>) => Errors<E>;

/**
 * Custom form validator hook
 * @param validation Validator that return the errors list
 */
export const useValidation = <E>(validation: Validate<E>): UseValidation<E> => {
  /** Setting initial hook state */
  const [status, setStatus] = React.useState<Status<E>>({
    isValid: false,
    errors: {},
  });

  /** Exported resources from this hook */
  return {
    errors: status.errors,
    isValid: status.isValid,
    setErrors: (errors: Errors<E>) => {
      setStatus({
        isValid: false,
        errors,
      });
    },
    validate: (entity) => {
      const errors: Errors<E> = validation(entity);
      const isValid = Object.values(errors).length === 0;

      // Set the errors on status
      setStatus((prev) => ({
        ...prev,
        errors,
        isValid,
      }));
      return isValid;
    },
  };
};
