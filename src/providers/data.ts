import { createDataProvider, type CreateDataProviderOptions } from "@refinedev/rest";
import type { ListResponse } from "@/types";
import { BACKEND_BASE_URL } from "@/constants";

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    buildQueryParams: async ({ pagination, filters }) => {
      const query: Record<string, string | number> = {
        page: pagination?.currentPage ?? 1,
        limit: pagination?.pageSize ?? 10,
      };

      for (const filter of filters ?? []) {
        if (!("field" in filter) || filter.value == null) continue;

        if (filter.field === "name" && filter.operator === "contains") {
          query.search = String(filter.value);
        } else if (filter.field === "department" && filter.operator === "eq") {
          query.department = String(filter.value);
        }
      }

      return query;
    },

    mapResponse: async (response) => {
      if (!response.ok) {
        throw {
          message: "Failed to fetch subjects",
          statusCode: response.status,
        };
      }

      const payload: ListResponse = await response.json();

      return payload.data ?? [];
    },

    getTotalCount: async (response) => {
      const payload: ListResponse = await response.json();

      return payload.pagination?.total ?? payload.data?.length ?? 0;
    },
  },
};

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };
