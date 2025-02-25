/**
 * Query Parameters Enum
 *
 * Centralizes URL query parameter names:
 * - Prevents hardcoded query strings in URLs
 * - Ensures consistent parameter naming across filters
 * - Used with paths mapper for type-safe URL generation
 *
 * Usage: QueryParams.Title instead of 'title'
 */

export enum QueryParams {
  ChartId = 'chart_id',
}
