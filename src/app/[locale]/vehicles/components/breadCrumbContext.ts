"use client"
import React, { createContext, useContext } from 'react';

const BreadcrumbContext = createContext([]);

export const useBreadcrumb = () => useContext(BreadcrumbContext);
export const BreadcrumbProvider = BreadcrumbContext.Provider;